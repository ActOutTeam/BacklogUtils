console.log("[ACTOUT] load extension");

window.addEventListener('load', main, false);
window.addEventListener('popstate', main);
window.addEventListener('pushstate', main);
window.addEventListener('replacestate', main);

const loadFontAwesome = () => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://use.fontawesome.com/releases/v5.13.1/css/all.css';
    document.head.insertAdjacentElement('beforeEnd', link);
};

// コピーボタンを押したときの動作
const extensionCopy = (e, task) => {
    e.stopPropagation()

    const taskName = task.querySelector('p').innerText;
    const taskId = task.querySelector('.card-label').innerText;
    const origin = location.origin;

    let dueDate = task.querySelector('input').value;
    if (dueDate === '') {
        dueDate = '未設定';
    }

    const firstLine = `${taskId} ${taskName} (期日: ${dueDate})`
    const secondLine = `${origin}/view/${taskId}`;
    navigator.clipboard.writeText(`${firstLine}\n${secondLine}`);
}

function main(event) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    // fontawesomeのロード
    loadFontAwesome();

    // 無限にロードが走らないようにするためのカウンタ
    const maxCount = 10;
    let loadCount = 0;

    function jsLoaded() {
        clearInterval(jsInitCheckTimer);

        // カウンタが最大値に達したら終了
        loadCount++;
        if (loadCount > maxCount) {
            console.log('[ACTOUT] 「完了」状態のボードに1つ以上のタスクを置いてから、再読み込みをしてください。');
            return;
        }

        // Backlogはタスク読み込みが非同期のため、「完了」状態のタスクが取得出来るかどうかで読み込み完了かどうかを判断する
        const completedTasks = document.querySelectorAll('#kanban > div > div > div.css-ldklco-box > div > section:last-child > ul li');
        if (completedTasks.length === 0) {
            setTimeout(jsLoaded, 2000)
            return;
        }

        // 全てのタスクを取得する
        const tasks = document.querySelectorAll('#kanban > div > div section ul li');
        tasks.forEach(task => {
            // ボタン要素を作成
            let newButton = document.createElement('button');
            newButton.innerHTML = '<i class="far fa-copy"></i>';
            newButton.classList.add('new-button');
            newButton.style.display = 'none';

            // ボタンを配置
            task.querySelectorAll('button')[0].parentNode.appendChild(newButton);
            // ボタンが押された時の処理を追加する
            newButton.addEventListener('click', function(e) {
                extensionCopy(e, task);
            });

            // タスクがマウスオーバーしたらボタンが表示されるようにする
            task.addEventListener('mouseover', function() {
                newButton.style.display = 'inline';
            });

            // タスクがマウスから外れたらボタンが非表示になるようにする
            task.addEventListener('mouseleave', function() {
                newButton.style.display = 'none';
            });
        });
    }
}
