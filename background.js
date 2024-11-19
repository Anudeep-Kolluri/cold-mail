// Create the context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "coldMail",
    title: "Cold Mail",
    contexts: ["selection"] // Show only when text is selected
  });
});

// Listener for context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "coldMail") {
    const selectedText = info.selectionText;

    // Define custom subject and body text
    const subjectText = "Exploring Data Engineering Opportunities"; // Subject text
    const bodyText = `Hi,\n\nI hope this message finds you well. My name is Anudeep Kolluri, and I am a graduate student at the University of Texas at Arlington, completing my Master’s in Data Science this December.\n\nI am actively seeking opportunities in data engineering, where I can apply my skills in building and managing scalable data pipelines, optimizing data workflows, and working with large datasets. During my graduate studies, I have gained hands-on experience with tools and technologies such as Python, SQL, Spark, Hadoop, AWS, etc. and worked on projects involving ETL pipeline development, cloud-based data processing, and database optimization.\n\nI am particularly passionate about creating efficient, reliable data systems that empower teams to make data-driven decisions. I would love the chance to discuss how my background aligns with the needs of your team or organization.\n\nPlease let me know if there are any current or upcoming opportunities, or if you could connect me with someone in your network who might be hiring. I have attached my resume for your reference and would be happy to provide additional details about my skills and experience.\n\nThank you for your time and consideration. I look forward to hearing from you!\n\nBest regards,\nAnudeep Kolluri\n6823916787\nhttps://www.linkedin.com/in/kolluri-anudeep/`; // Body text

    // Prepare the Gmail compose URL with the selected email as the recipient, subject, and body
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(selectedText)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    // Open Gmail's compose window with the selected email, subject, and body pre-filled
    chrome.tabs.create({ url: gmailComposeUrl });
  }
});
