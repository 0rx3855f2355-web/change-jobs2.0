let companies = JSON.parse(localStorage.getItem("companies")) || [];

// テーブル表示
function renderTable() {
  const tbody = document.querySelector("#companyTable tbody");
  tbody.innerHTML = "";

  companies.forEach(c => {
    const row = `
      <tr>
        <td>${c.name}</td>
        <td>${c.apply_site}</td>
        <td>${c.status.document}</td>
        <td>${c.status.interview1}</td>
        <td>${c.status.interview2}</td>
        <td>${c.status.result}</td>
        <td><a href="edit.html?id=${c.id}">編集</a></td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

renderTable();
