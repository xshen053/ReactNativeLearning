const fetchDrug = async () => {
  try {
    const response = await fetch('http://localhost:3000/drugs/3');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchDrugConflicts = async () => {
  try {
    const response = await fetch('http://localhost:3000/drugConflicts/');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchTakenRecords = async () => {
  try {
    const response = await fetch('http://localhost:3000/drugTakenRecords');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchPrescriptions = async () => {
  try {
    const response = await fetch('http://localhost:3000/prescriptions');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchRoles = async () => {
  try {
    const response = await fetch('http://localhost:3000/roles');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserRoles = async () => {
  try {
    const response = await fetch('http://localhost:3000/userRoles');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
