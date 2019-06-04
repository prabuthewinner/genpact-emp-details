import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Layout, Select, Button, Spin  } from 'antd';
import { bindActionCreators } from 'redux';

import { fetchEmployyeDetailsEpic } from './store';

import './App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;
const { Option } = Select;

function App() {

  const departmentArr = [
    {
      key: 'HR',
      value: 'HR'
    },
    {
      key: 'ENGINEERING',
      value: 'ENGINEERING'
    }
  ];

  const employeeIds = {
    'HR': [
      1,2,3,4,5
    ],
    'ENGINEERING': [
      6,7,8,9,10
    ]
  }

  const [empIdArr, setEmpIdArr] = useState([])
  const [department, setDepartment] = useState('');
  const [empId, setEmpId] = useState();
  const [empDetails, setEmpDetails] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    document.querySelector('.container').style.height = window.innerHeight+'px';
  },[]);

  function handleDepartment(value) {
    setDepartment(value);
    setEmpIdArr(employeeIds[value]);
  }

  function handleEmpId(id) {
    setEmpId(id);
  }

  function clearEntries() {
    setDepartment('');
    setEmpIdArr([]);
    setEmpId();
    setEmpDetails({})
  }

  function getEmpDetails() {
    setLoader(true);
    fetch(`https://reqres.in/api/users/${empId}`).then((res)=> {
      return res.json();
    }).then(res => {
      console.log("res", res.data)
      setEmpDetails(res.data);
      setLoader(false);
      
    })

    //props.fetchEmpDetails(empId);
  }

  return (
    <Layout>
      <Content className="container">
          <section className="form-sec">
            <div className="">
              <div>Departments:</div>
              <Select  style={{ width: 120 }} onChange={handleDepartment} value={department}>
                {departmentArr.map((dept, key) => {
                  return (<Option value={dept.key} key={key+1}>{dept.value}</Option>)
                })}
              </Select>
            </div>
            <div className="">
              <div>Employee Id:</div>
              <Select  style={{ width: 120 }} onChange={handleEmpId} value={empId}>
                {empIdArr.map((empid, key) => {
                  return (<Option value={empid} key={key+1}>{empid}</Option>)
                })}
              </Select>
            </div>
            <div className="">
              <Button onClick={getEmpDetails} disabled={empId===undefined}>GetDetails</Button>
            </div>
            <div className="">
              <Button onClick={clearEntries} disabled={department===''}>Clear</Button>
            </div>
          </section>

          {empDetails.hasOwnProperty('id') ? (<section className="emp-details">
                <div className="details-cntr">
                  <img src={empDetails['avatar']} alt="Emp Img" />
                  <div className="details-sec">
                    <span>ID: {empDetails['id']}</span>
                    <span>Email: {empDetails['email']}</span>
                    <span>Name: {`${empDetails['first_name']} ${empDetails['last_name']}`}</span>
                  </div>
                </div>
          </section>) : null }

          {loader ? <section className="loader-sec"><Spin /></section> : null}

      </Content>
    </Layout>
  );
}

   

export default App;
