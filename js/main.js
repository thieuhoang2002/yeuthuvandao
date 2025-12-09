// js/main.js
//test

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#qa-table tbody");
  const searchInput = document.getElementById("search-input");
  const suggestions = document.getElementById("suggestions");

  // Hàm render bảng
  function renderTable(filteredData) {
    tableBody.innerHTML = "";
    filteredData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.stt}</td>
        <td>${item.question}</td>
        <td>${item.answer}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Render ban đầu
  renderTable(data);

  // Xử lý gợi ý & lọc
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    // Lọc gợi ý
    const matched = data.filter(item =>
      item.question.toLowerCase().includes(value)
    );

    // Gợi ý
    suggestions.innerHTML = "";
    if (value && matched.length) {
      matched.slice(0, 10).forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.question;
        div.addEventListener("click", () => {
          searchInput.value = item.question;
          suggestions.innerHTML = "";
          renderTable([item]); // render đúng câu đó
        });
        suggestions.appendChild(div);
      });
    }

    // Nếu chưa chọn thì vẫn lọc bảng tạm thời
    if (!value) {
      renderTable(data);
    } else {
      renderTable(matched);
    }
  });

  // Click ra ngoài tắt gợi ý
  document.addEventListener("click", (e) => {
    if (e.target !== searchInput) {
      suggestions.innerHTML = "";
    }
  });
});
