const links = [
  // Profiles
  { name: "GitHub Profile", url: "https://github.com/Ayyappanmj", expected: "Profile" },
  { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/ayyappanmj", expected: "Profile" },

  // Demo List (Projects 1-10)
  { name: "API Gateway (GitHub)", url: "https://github.com/Ayyappanmj/fastapi-api-gateway", expected: "Repo" },
  { name: "API Gateway (Live Demo)", url: "https://fastapi-gateway-frontend.onrender.com", expected: "Live Demo" },
  { name: "IPL Auction (GitHub)", url: "https://github.com/Ayyappanmj/ipl-auction-strategy-optimizer", expected: "Repo" },
  { name: "IPL Auction (Live Demo)", url: "https://ipl-auction-strategy-optimizer.onrender.com", expected: "Live Demo" },
  { name: "Fraud Detection API (GitHub)", url: "https://github.com/Ayyappanmj/fraud-detection-api", expected: "Repo" },
  { name: "Fraud Detection API (Live Demo)", url: "https://fraud-detection-api-dashboard.onrender.com", expected: "Live Demo" },
  { name: "Predictive Maintenance (GitHub)", url: "https://github.com/Ayyappanmj/predictive-maintenance-mlops", expected: "Repo" },
  { name: "Predictive Maintenance (Live Demo)", url: "https://predictive-maintenance-dashboard-tsjb.onrender.com", expected: "Live Demo" },
  { name: "Market Intelligence Agent (GitHub)", url: "https://github.com/Ayyappanmj/autonomous-market-intelligence-agent", expected: "Repo" },
  { name: "Market Intelligence Agent (Live Demo)", url: "https://market-intelligence-agent-lf5u.onrender.com", expected: "Live Demo" },
  { name: "Bug Report Analyzer (GitHub)", url: "https://github.com/Ayyappanmj/bug-report-log-analyzer", expected: "Repo" },
  { name: "Bug Report Analyzer (Live Demo)", url: "https://bug-report-log-analyzer.onrender.com", expected: "Live Demo" },
  { name: "RAG Document Assistant (GitHub)", url: "https://github.com/Ayyappanmj/rag-document-assistant", expected: "Repo" },
  { name: "RAG Document Assistant (Live Demo)", url: "https://rag-document-assistant-frontend-7ksx.onrender.com", expected: "Live Demo" },
  { name: "Self-Healing Web Agent (GitHub)", url: "https://github.com/Ayyappanmj/self-healing-automation-agent", expected: "Repo" },
  { name: "Self-Healing Web Agent (Live Demo)", url: "https://self-healing-automation-agent.onrender.com", expected: "Live Demo" },
  { name: "Real-Time Chat App (GitHub)", url: "https://github.com/Ayyappanmj/fullstack-realchat-app", expected: "Repo" },
  { name: "Real-Time Chat App (New Demo)", url: "https://fullstack-realchat-app.onrender.com", expected: "Live Demo" },
  { name: "Real-Time Chat App (Old Demo)", url: "https://chat-app-mern-prod.onrender.com", expected: "Live Demo" },
  { name: "AI Resume Analyzer (GitHub)", url: "https://github.com/Ayyappanmj/ai-resume-analyzer", expected: "Repo" },
  { name: "AI Resume Analyzer (Live Demo)", url: "https://ai-resume-analyzer-gxbr.onrender.com", expected: "Live Demo" },

  // GitHub Only Projects
  { name: "NutriVoice AI (GitHub)", url: "https://github.com/Ayyappanmj/nutrivoice-ai", expected: "Repo" },
  { name: "SagaFlow (GitHub)", url: "https://github.com/Ayyappanmj/SagaFlow", expected: "Repo" },
  { name: "CodeForge (GitHub)", url: "https://github.com/Ayyappanmj/codeforge", expected: "Repo" },
  { name: "FieldOps (GitHub)", url: "https://github.com/Ayyappanmj/FieldOps", expected: "Repo" },
  { name: "Vaultly (GitHub)", url: "https://github.com/Ayyappanmj/Vaultly", expected: "Repo" },
  { name: "DataTrust (GitHub)", url: "https://github.com/Ayyappanmj/DataTrust", expected: "Repo" },
  { name: "Supply Chain Optimization (GitHub)", url: "https://github.com/Ayyappanmj/Enterprise-Ecommerce-SupplyChain-Optimization", expected: "Repo" },
  { name: "Customer Churn Analytics (GitHub)", url: "https://github.com/Ayyappanmj/ecommerce-churn-retention-analytics", expected: "Repo" },
  { name: "StreamCommerce (GitHub)", url: "https://github.com/Ayyappanmj/streamcommerce", expected: "Repo" },
  { name: "CloudPilot (GitHub)", url: "https://github.com/Ayyappanmj/cloudpilot", expected: "Repo" },
  { name: "AutoOps (GitHub)", url: "https://github.com/Ayyappanmj/autoops-linux-infrastructure-automation", expected: "Repo" },

  // Additional Work
  { name: "Active Directory Lab (GitHub)", url: "https://github.com/Ayyappanmj/Enterprise-ActiveDirectory-Lab", expected: "Repo" },
  { name: "HelpDeskPro (GitHub)", url: "https://github.com/Ayyappanmj/helpdesk-analytics-osTicket", expected: "Repo" },
  { name: "Sleep Detection Alarm (GitHub)", url: "https://github.com/Ayyappanmj/Sleep-detection-alarm", expected: "Repo" },
  { name: "DoomScrolling Stop (GitHub)", url: "https://github.com/Ayyappanmj/doomscrolling-", expected: "Repo" },
  { name: "Smart Attendance System (GitHub)", url: "https://github.com/Ayyappanmj/Smart-Attendance-System", expected: "Repo" },
  { name: "Self-Healing DevOps Agent (GitHub)", url: "https://github.com/Ayyappanmj/self-healing-devops-cicd-agent", expected: "Repo" },
  { name: "Automated Code Review (GitHub)", url: "https://github.com/Ayyappanmj/automated-code-review-security-auditor", expected: "Repo" },

  // Certification Verify Links
  { name: "freeCodeCamp QA Cert", url: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/quality-assurance-v7", expected: "Cert" },
  { name: "Cisco Prompt Engineer Credly", url: "https://www.credly.com/badges/5a4141d8-f80e-47cf-a335-5154ee4a047c", expected: "Cert" },
  { name: "Cisco Python Essentials Credly", url: "https://www.credly.com/badges/28da4117-6468-4663-8a3a-a537f8cf2834", expected: "Cert" },
  { name: "Cisco Data Analytics Credly", url: "https://www.credly.com/badges/d007f3dc-ea8c-4bc7-b891-bdfcbeba2637", expected: "Cert" },
  { name: "Cisco Data Science Credly", url: "https://www.credly.com/badges/fb64ea87-251f-4cb1-80a5-f377501a24d5", expected: "Cert" },
  { name: "freeCodeCamp Python Cert", url: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/scientific-computing-with-python-v7", expected: "Cert" },
  { name: "freeCodeCamp JS Cert", url: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/javascript-algorithms-and-data-structures-v8", expected: "Cert" },
  { name: "Claude Academy Cert", url: "https://academy.anthropic.com/certificates/60340d21-f925-4c60-a29d-472ef89c372b", expected: "Cert" },

  // Tested Alternates (from old portfolio)
  { name: "Alt: api-gateway-rate-limiter", url: "https://github.com/Ayyappanmj/api-gateway-rate-limiter", expected: "Alt" },
  { name: "Alt: production-rag-document-assistant", url: "https://github.com/Ayyappanmj/production-rag-document-assistant", expected: "Alt" },
  { name: "Alt: bug-report-log-analyzer-agent", url: "https://github.com/Ayyappanmj/bug-report-log-analyzer-agent", expected: "Alt" },
  { name: "Alt: ai-resume-analyzer-ats-scorer", url: "https://github.com/Ayyappanmj/ai-resume-analyzer-ats-scorer", expected: "Alt" },
  { name: "Alt: ipl-auction-predictive-optimization", url: "https://github.com/Ayyappanmj/ipl-auction-predictive-optimization", expected: "Alt" },
  { name: "Alt: supply-chain-margin-optimization", url: "https://github.com/Ayyappanmj/supply-chain-margin-optimization", expected: "Alt" },
  { name: "Alt: chat-app", url: "https://github.com/Ayyappanmj/chat-app", expected: "Alt" },
];

async function checkUrl(url) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        redirect: "follow",
        signal: AbortSignal.timeout(30000),
      });
      return res.status;
    } catch (err) {
      if (attempt === 2) return err.code || err.message || "FAILED";
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
}

async function main() {
  const results = [];
  for (const item of links) {
    process.stdout.write(`Checking ${item.name}... `);
    const status = await checkUrl(item.url);
    console.log(status);
    results.push({ ...item, status });
  }

  console.log("\n==================== LINK VERIFICATION TABLE ====================");
  console.log("| Name | Type | URL | Status | Outcome |");
  console.log("|---|---|---|---|---|");
  for (const r of results) {
    const outcome =
      r.status === 200
        ? "Active (HTTP 200)"
        : r.status === 999
        ? "Active (Bot-check 999)"
        : "Omitted / Flagged";
    console.log(`| ${r.name} | ${r.expected} | ${r.url} | ${r.status} | ${outcome} |`);
  }
}

main();
