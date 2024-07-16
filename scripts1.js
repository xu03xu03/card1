
        // 從localStorage中獲取選擇結果
        var selections = JSON.parse(localStorage.getItem('selections'));

        // 初始化顯示結果的文本
        var resultText = "您所選擇的字母是：";
        // 排序selections數組，按照choice的順序
        selections.sort((a, b) => a.choice - b.choice);
        // 遍歷selections數組中的每個選擇
        selections.forEach(selection => {
            // 將每個選擇添加到顯示結果文本中
            resultText += selection.letter + " ";
        });

        // 更新結果顯示區域的文本
        document.getElementById("results").innerText = resultText.trim();

        // 決定是否顯示或隱藏卡片

        document.addEventListener('DOMContentLoaded', function() {
            const primaryResultsContainer = document.getElementById('primaryResults');
            const secondaryResultsContainer = document.getElementById('secondaryResults');
            const resultsContainer = document.getElementById('results');
            const nextTestButton = document.getElementById('nextTestButton');
        
            
        
            // 獲取所有卡片元素
            const cards = document.querySelectorAll('.card');
        
            // 遍歷所有卡片
            cards.forEach(card => {
                // 獲取卡片對應的字母組合
                const cardLetters = card.getAttribute('data-letter');
                // 將字母組合轉換為數組
                const cardLettersArray = cardLetters.split('、');
                // 計算卡片中有多少字母與選擇的字母匹配
                const matchCount = cardLettersArray.filter(letter => selectedLetters.includes(letter)).length;
        
                // 如果卡片的字母完全匹配選擇的字母，顯示在主要結果區域
                if (matchCount === 3) {
                    primaryResultsContainer.appendChild(card);
                }
                // 如果卡片的字母部分匹配（至少兩個），顯示在次要結果區域
                else if (matchCount >= 2) {
                    secondaryResultsContainer.appendChild(card);
                }
                // 如果卡片的字母匹配數量少於2，隱藏該卡片
                else {
                    card.style.display = 'none';
                }
            });
        
            // 為"進行第二項測驗"按鈕添加點擊事件監聽器
            nextTestButton.addEventListener('click', () => {
                // 跳轉到下一個測驗頁面
                window.location.href = 'next_test.html';
            });
        });
        
   