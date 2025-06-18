document.addEventListener("DOMContentLoaded", function () {
    let transactions = [];

    const tableBody = document.querySelector("#transactions-table tbody");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter-type");
    const sortSelect = document.getElementById("sort-by");
    const totalTransactions = document.getElementById("total-transactions");

    function loadTransactions(data = transactions) {
        tableBody.innerHTML = "";
        let total = 0;

        data.forEach(tx => {
            total += tx.amount || 0;
            const row = `
                <tr>
                    <td>${tx.transaction_id || "N/A"}</td>
                    <td>${tx.type || "Uncategorized"}</td>
                    <td>${tx.amount || 0} RWF</td>
                    <td>${tx.date || "N/A"}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        totalTransactions.textContent = data.length;
    }

    function searchTransactions() {
        const query = searchInput.value.toLowerCase();
        let filteredData = transactions.filter(tx =>
            (tx.type || "").toLowerCase().includes(query) ||
            (tx.transaction_id || "").includes(query) ||
            (tx.date || "").includes(query)
        );
        loadTransactions(filteredData);
    }

    function filterTransactions() {
        const selectedType = filterSelect.value;
        let filteredData = transactions;
        if (selectedType !== "all") {
            filteredData = transactions.filter(tx => tx.type === selectedType);
        }
        loadTransactions(filteredData);
    }

    function sortTransactions() {
        const sortBy = sortSelect.value;
        let sortedData = [...transactions];

        if (sortBy === "amount") {
            sortedData.sort((a, b) => (b.amount || 0) - (a.amount || 0));
        } else if (sortBy === "date") {
            sortedData.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
        }
        
        loadTransactions(sortedData);
    }

    // Fetch actual data from the JSON file
    fetch("transactions.json")
        .then(res => res.json())
        .then(data => {
            transactions = data;
            loadTransactions();
        })
        .catch(err => {
            console.error("Failed to load transactions.json:", err);
            // fallback to empty state
            transactions = [];
            loadTransactions();
        });

    // Add event listeners
    searchInput.addEventListener("input", searchTransactions);
    filterSelect.addEventListener("change", filterTransactions);
    sortSelect.addEventListener("change", sortTransactions);
});
