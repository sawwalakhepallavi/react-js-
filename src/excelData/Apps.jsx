import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(storedData);
    setIsDataLoaded(true);
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...data, input];
    setData(newData);
    setInput({ name: "", email: "", password: "" });

    // Save data to local storage
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const exportToExcel = () => {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
      <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:x="urn:schemas-microsoft-com:office:excel"
        xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
        xmlns:html="http://www.w3.org/TR/REC-html40">
        <Worksheet ss:Name="Sheet1">
          <Table>
            <Row>
              <Cell><Data ss:Type="String">Name</Data></Cell>
              <Cell><Data ss:Type="String">Email</Data></Cell>
              <Cell><Data ss:Type="String">Password</Data></Cell>
            </Row>
            ${data
              .map(
                (row, index) => `
                <Row key=${index}>
                  <Cell><Data ss:Type="String">${row.name}</Data></Cell>
                  <Cell><Data ss:Type="String">${row.email}</Data></Cell>
                  <Cell><Data ss:Type="String">${row.password}</Data></Cell>
                </Row>
              `
              )
              .join("")}
          </Table>
        </Worksheet>
      </Workbook>`;

    const blob = new Blob([xmlData], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "exported_data.xls";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render the form only when data is loaded
  return isDataLoaded ? (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Your password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  ) : null;
};

export default App;