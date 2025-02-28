import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Box } from '@mui/material';
import { useAuthContext } from "@asgardeo/auth-react";

const EmployeeManagement = () => {
  const { state, signIn, signOut } = useAuthContext();
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', birthdate: '', salary: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !form.birthdate || !form.salary) return;

    try {
      if (editing) {
        await axios.put(`http://localhost:3001/employees/${currentId}`, form);
      } else {
        await axios.post('http://localhost:3001/employees', form);
      }
      fetchEmployees();
      setForm({ first_name: '', last_name: '', email: '', birthdate: '', salary: '' });
      setEditing(false);
      setCurrentId(null);
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setForm({
      ...employee,
      birthdate: new Date(employee.birthdate).toISOString().split('T')[0] // Format birthdate to YYYY-MM-DD
    });
    setEditing(true);
    setCurrentId(employee.employee_id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    
    <Container sx={{ mt: 4 }}>
      {
        state.isAuthenticated
          ? (
            <div>
               <Typography variant="h4" gutterBottom>Employee Management</Typography>

          {/* Employee List */}
          <TableContainer component={Paper} sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Birthdate</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.employee_id}>
                    <TableCell>{emp.first_name}</TableCell>
                    <TableCell>{emp.last_name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{new Date(emp.birthdate).toLocaleDateString()}</TableCell>
                    <TableCell>{emp.salary}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(emp)}>Edit</Button>
                      <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(emp.employee_id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Add/Edit Employee Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}>
            <TextField
              label="First Name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Birthdate"
              type="date"
              name="birthdate"
              value={form.birthdate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Salary"
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              {editing ? 'Update Employee' : 'Add Employee'}
            </Button>
          </Box>

              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          :  <Box sx={{ display: 'fixed', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => signIn()}
            sx={{ fontSize: '1.5rem', padding: '10px 20px' }}
          >
            Login
          </Button>
        </Box>
          
      }

    </Container>
  );
};

export default EmployeeManagement;
