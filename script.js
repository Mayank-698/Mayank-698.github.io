document.addEventListener("DOMContentLoaded", function () {
    generateCaptcha();

    document.getElementById("resultForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });

    document.getElementById("backButton").addEventListener("click", function () {
        window.history.back();
    });
});

// ✅ Non-Copyable Captcha Generator
function generateCaptcha() {
    let captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById("captchaText").innerText = captchaText;
    document.getElementById("captcha").dataset.correctCaptcha = captchaText;
}

// ✅ Validate Form & Check Captcha
function validateForm() {
    let enteredCaptcha = document.getElementById("captcha").value.toUpperCase();
    let correctCaptcha = document.getElementById("captcha").dataset.correctCaptcha;

    if (enteredCaptcha !== correctCaptcha) {
        alert("Incorrect Captcha! Please try again.");
        generateCaptcha();
        return;
    }

    displayResult();
}

// ✅ Display Student Result
function displayResult() {
    let resultDiv = document.getElementById("result");

    let totalMarks = 84 + 88 + 84 + 90 + 91 + 93;
    let percentage = (totalMarks / 600) * 100;
    let cgpa = (percentage / 9.5).toFixed(2);

    resultDiv.innerHTML = `
        <h3>Result for Student ID: 20170264772</h3>
        <p><strong>Student Name:</strong> Mayank Rustagi</p>
        <p><strong>Class:</strong> XI</p>
        <p><strong>Section:</strong> B</p>
        <p><strong>Stream:</strong> Commerce</p>

        <table>
            <tr><th>Subject</th><th>Theory</th><th>Practical</th><th>Total</th><th>Grade</th></tr>
            <tr><td>Mathematics</td><td>65</td><td>19</td><td>84</td><td>A2</td></tr>
            <tr><td>Accountancy</td><td>68</td><td>20</td><td>88</td><td>A2</td></tr>
            <tr><td>Economics</td><td>66</td><td>18</td><td>84</td><td>A2</td></tr>
            <tr><td>Business Studies</td><td>70</td><td>20</td><td>90</td><td>A2</td></tr>
            <tr><td>English</td><td>71</td><td>20</td><td>91</td><td>A1</td></tr>
            <tr><td>Financial Markets</td><td>56</td><td>38</td><td>94</td><td>A1</td></tr>
        </table>

        <p><strong>Overall Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>CGPA:</strong> ${cgpa}</p>
    `;
}