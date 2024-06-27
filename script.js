document.addEventListener('DOMContentLoaded', function() {
    // Evento de clique no botão de enviar feedback
    document.getElementById('submit-feedback').addEventListener('click', function() {
        // Captura o texto do textarea de feedback
        const feedbackText = document.getElementById('feedback-input').value.trim();

        // Verifica se o campo de feedback não está vazio
        if (feedbackText !== '') {
            // Limpa o campo de feedback após enviar
            document.getElementById('feedback-input').value = '';

            // Exibe uma mensagem de sucesso para o usuário
            document.getElementById('feedback-message').textContent = 'Obrigado pelo seu feedback!';
        } else {
            // Caso o campo de feedback esteja vazio, exibe uma mensagem para o usuário
            document.getElementById('feedback-message').textContent = 'Por favor, escreva algo antes de enviar.';
        }

        // Limpa a mensagem após 3 segundos
        setTimeout(function() {
            document.getElementById('feedback-message').textContent = '';
        }, 3000);
    });

    // Dados simulados para a tabela de vencedores
    const winnersData = [
        { ano: 2024, clube: 'Real Madrid' },
        { ano: 2023, clube: 'Manchester City' },
        { ano: 2022, clube: 'Chelsea' },
        { ano: 2021, clube: 'Chelsea' },
        { ano: 2020, clube: 'Bayern de Munique' }
        // Adicione mais dados conforme necessário
    ];

    // Função para carregar dinamicamente os vencedores na tabela
    function loadWinnersTable() {
        const tableBody = document.querySelector('#winners-table tbody');

        // Limpa o conteúdo existente da tabela
        tableBody.innerHTML = '';

        // Itera sobre os dados e cria as linhas da tabela
        winnersData.forEach(function(item) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.ano}</td>
                <td>${item.clube}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Carrega os vencedores na tabela ao carregar a página
    loadWinnersTable();
});
