import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/rfq", (req, res) => {
    console.log("Received RFQ Request:", req.body);
    // TODO: Connect to CRM (HubSpot/Pipedrive)
    // TODO: Send auto-responder email via SMTP
    res.status(200).json({ 
      success: true, 
      message: "Thank you — our team will respond within 4 business hours" 
    });
  });

  app.post("/api/sample-request", (req, res) => {
    console.log("Received Sample Request:", req.body);
    res.status(200).json({ success: true, message: "Sample request received" });
  });

  app.post("/api/catalog-download", (req, res) => {
    console.log("Received Catalog Download Request:", req.body);
    res.status(200).json({ 
      success: true, 
      downloadUrl: "https://example.com/catalog.pdf" 
    });
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
