const searchInput = document.getElementById("search")

searchInput.addEventListener("input", (event) => {
  const value = formatString(event.target.value)

  const items = document.querySelectorAll(".items .item")
  const noResults = document.getElementById(".no-result")

  let hasResults = false

  items.forEach((item) => {
    const itemTitle = item.querySelector(".item-title").textContent
    const itemDescription = item.querySelector(".description").textContent

    if (
      formatString(itemTitle).indexOf(value) !== -1 ||
      formatString(itemDescription).indexOf(value) !== -1
    ) {
      item.style.display = "flex"

      hasResults = true
    } else {
      item.style.display = "none"
    }
  })

  if (hasResults) {
    noResults.style.display = "none"
  } else {
    noResults.style.display = "block"
  }
})

function formatString(value) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}
