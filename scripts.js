// 切換介紹內容顯示狀態的函數
function toggleDescription(button) {
    const card = button.parentElement; // 獲取按鈕的父元素卡片
    card.classList.toggle('show'); // 切換 'show' 類
}


        // 用於存儲選擇結果的數組
        var selections = [];

        // 當用戶按下1、2或3按鈕時調用這個函數
        function markCard(button, choice) {
            // 獲取按鈕所在的卡片元素
            var card = button.closest('.card');
            // 獲取卡片上的字母
            var letter = card.getAttribute('data-letter');
            

            // 如果該卡片已經被選擇，則返回
            if (selections.some(selection => selection.letter === letter)) {
                return;
            }

            // 如果選擇的卡片數量已達到3，則返回
            if (selections.length >= 3) {
                return;
            }

            // 在selections數組中添加這張卡片的選擇
            selections.push({ letter: letter, choice: choice });

            // 標記該卡片為選擇狀態
            card.classList.add("selected");

            // 更新顯示結果
            updateResult();
        }

        // 當用戶按下取消按鈕時調用這個函數
        function unmarkCard(button) {
            // 獲取按鈕所在的卡片元素
            var card = button.closest('.card');
            // 獲取卡片上的字母
            var letter = card.getAttribute('data-letter');

            // 從selections數組中刪除這張卡片的選擇
            selections = selections.filter(selection => selection.letter !== letter);

            // 移除該卡片的選擇狀態
            card.classList.remove("selected");

            // 更新顯示結果
            updateResult();
        }

        // 更新顯示結果的函數
        function updateResult() {
            // 初始化顯示結果的文本
            var resultText = "你選擇的字母是：";
            // 遍歷selections數組中的每個選擇
            selections.forEach(selection => {
                // 將每個選擇添加到顯示結果文本中
                resultText += selection.letter + " ";
            });

            // 如果沒有任何選擇，顯示預設文本
            if (selections.length === 0) {
                resultText = "選擇結果會顯示在這裡:";
            }

            // 更新結果顯示區域的文本
            document.getElementById("result").innerText = resultText.trim();

            // 檢查是否已選擇三個卡片
            if (selections.length === 3) {
                // 顯示結果按鈕
                document.getElementById("resultButton").style.display = 'block';
            } else {
                // 隱藏結果按鈕
                document.getElementById("resultButton").style.display = 'none';
            }
        }
        
  