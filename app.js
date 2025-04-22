const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const dados = {
        nome: "LUCAS FERNANDO GUERRA",
        curso: "Desenvolvimento de Software Multiplataforma",
        habilidades: [
            "Dinâmico e responsável",
            "Comunicativo",
            "Proativo",
            "Capacidade em trabalhar em equipe",
            "Organizado",
            "Focado em resultados",
            "Criativo",
            "Facilidade em aprender novas tecnologias",
            
        ],
        competencias: {
            linguagens: ["Python", "SQL", "HTML", "CSS", "JavaScript","Typescript", "Bootstrap", "aws","figma"],
            sistemas: ["Windows"],
            framework: ["Flask", "React", "Node.js", "Express"],
            ferramentas: ["Git", "MySQL", "VSCode Studio","Figma"],
            banco_de_dados: ["MySQL"],
            metodos: ["Scrum"],
            idiomas: ["Inglês", "Espanhol"],
            outros: ["Desenvolvimento Web", "Desenvolvimento de Aplicativos", "Desenvolvimento de Sistemas"]
            
        }
    };

    res.render('index', { dados });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
