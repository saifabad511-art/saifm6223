const generatePDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('DevMind AI Technical Report', 10, 10);
    doc.save('report.pdf');
};