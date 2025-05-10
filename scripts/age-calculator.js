const init = () => {
    document.getElementById("calculate").addEventListener("click", calculateAge);
}

document.addEventListener("DOMContentLoaded", init); 

const countYears = (startDate, endDate) => {
    return endDate.getFullYear() - startDate.getFullYear();
};

const countMonths = (startDate, endDate) => {
    return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
};

const countWeeks = (startDate, endDate) => {
    const diffMilliseconds = endDate - startDate;
    return Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 7));
};

const countDays = (startDate, endDate) => {
    const diffMilliseconds = endDate - startDate;
    return Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
};
const countLife = (birthDate, expectedDate) => {
    const now = new Date();
    const livedMilliseconds = now - birthDate;
    const totalExpectedMilliseconds = expectedDate - birthDate;
    if (totalExpectedMilliseconds <= 0) return 100;
    return ((livedMilliseconds * 100) / totalExpectedMilliseconds).toFixed(0);
};


const calculateAge = () => {
    const birthDateInput = document.getElementById("birthdate").value;
    const expectedYearsInput = parseInt(document.getElementById("expected-years").value);

    if (!birthDateInput || isNaN(expectedYearsInput)) {
        alert("Please enter a valid date and expected years.");
        return;
    }

    const [year, month, day] = birthDateInput.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const expectedLivingDate = new Date(year +expectedYearsInput , month -1, day); 
    const now = new Date();

    let years = countYears(birthDate, now );
    let expectedYears = countYears(birthDate, expectedLivingDate) ;
    let months = countMonths(birthDate, now);
    let expectedMonths = countMonths(birthDate, expectedLivingDate);

    let weeks = countWeeks(birthDate, now);
    let expectedWeeks = countWeeks(birthDate, expectedLivingDate);
    let days = countDays(birthDate, now);
    let expectedDays = countDays(birthDate, expectedLivingDate);
    let life = countLife(birthDate, expectedLivingDate);

    document.getElementById("year").value = years * 100 / expectedYears;
    document.getElementById("yearsLabel").textContent = "Year: " + years + "/" + expectedYears;  
    document.getElementById("month").value = months * 100 / expectedMonths;
    document.getElementById("monthLabel").textContent = "Months: " + months + "/" + expectedMonths;
    document.getElementById("week").value = weeks * 100 / expectedWeeks;
    document.getElementById("weekLabel").textContent = "Week: " + weeks + "/" + expectedWeeks;
    document.getElementById("day").value = days * 100 / expectedDays;
    document.getElementById("dayLabel").textContent = "Day: " + days + "/" + expectedDays;
    document.getElementById("life").value = life;
    document.getElementById("lifeLabel").textContent = "Life: " + life + "%";

}
