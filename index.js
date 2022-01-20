const wbm = require("./wbm");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/enviarMensagem", (req, res) => {
  const { contatos, mensagemAtual, ajustes } = req.body;
  console.log(contatos);
  console.log(mensagemAtual);
  console.log(ajustes);

  wbm
    .start({ qrCodeData: true, session: true, showBrowser: ajustes.abrirNavegador })
    .then(async () => {
      await wbm.waitQRCode();
    
      const phones = contatos;
      const message = mensagemAtual;

      await wbm.send(phones, message, ajustes);
      await wbm.end();
      res.send("{resultado: sucesso}")
    })
    .catch((err) => {
      console.log(err);
      res.send(`{resultador: ${err}}`)
    });
});

app.post("/autenticar", (req, res) => {
  wbm
    .start({ qrCodeData: false, session: true, showBrowser: true })
    .then(async (qrCodeData) => {
      res.send(qrCodeData);
      await wbm.waitQRCode();
      await wbm.end();
      res.send("Procedimento Finalizado")
    })
    .catch((err) => {
      console.log(err);
    });
});

// Loading frontend
/*app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
