let companies = JSON.parse(localStorage.getItem("companies")) || [];
let sortOrder = 1; // 1: 昇順, -1: 降順

// 応募サイト → URL の辞書
const siteLinks = {
  "レバテック": "https://levtech-career.com/",
  "doda": "https://doda.jp/",
  "マイナビ": "https://mynavi.jp/",
  "リクナビ": "https://job.rikunabi.com/",
  "Green": "https://www.green-japan.com/",
  "type": "https://type.jp/"
};

// テーブル表示
function renderTable(filter = "") {
  const tbody = document.querySelector("#companyTable tbody");
  tbody.innerHTML = "";

  companies
    .filter(c => c.name.includes(filter))
    .forEach((c, index) => {
      const siteUrl = siteLinks[c.apply_site] || "#";

      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${c.name}</td>
          <td><a href="${siteUrl}" target="_blank">${c.apply_site}</a></td>
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

// ソート機能
function sortTable(key) {
  companies.sort((a, b) => {
    const valA = key === "name" ? a.name :
                 key === "apply_site" ? a.apply_site :
                 key === "document" ? a.status.document :
                 key === "interview1" ? a.status.interview1 :
                 key === "interview2" ? a.status.interview2 :
                 key === "result" ? a.status.result : "";

    const valB = key === "name" ? b.name :
                 key === "apply_site" ? b.apply_site :
                 key === "document" ? b.status.document :
                 key === "interview1" ? b.status.interview1 :
                 key === "interview2" ? b.status.interview2 :
                 key === "result" ? b.status.result : "";

    return valA > valB ? sortOrder : -sortOrder;
  });

  sortOrder *= -1; // 昇順 ⇄ 降
