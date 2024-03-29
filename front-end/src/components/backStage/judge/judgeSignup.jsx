import { useState } from "react";
import Title from "../title";
import SingleSignup from "./judgeSignup/singleSignup";
import SignupInfo from "./judgeSignup/signupInfo";


function JudgeSignup() {
  const [list,setList] = useState([{
    account: '1',
    name: 'company',
    address: "china",
    managerName: 'me',
    managerTel: '123456',
    businessLicenseNumber: '1111111111',
  },{
    account: '2',
    name: 'company2',
    address: "china",
    managerName: 'me',
    managerTel: '123456',
    businessLicenseNumber: '1111111111',
  },{
    account: '3',
    name: 'company3',
    address: "china",
    managerName: 'me',
    managerTel: '123456',
    businessLicenseNumber: '1111111111',
  },{
    account: '4',
    name: 'company4',
    address: "china",
    managerName: 'me',
    managerTel: '123456',
    businessLicenseNumber: '1111111111',
  }])

  const [company, setCompany] = useState(null);

  function passCompany(info) {
    setList(list.filter((company) => company.account !== info.account))
    setCompany(null);
  }
  
  function rejectCompany(info) {
    setList(list.filter((company) => company.account !== info.account))
    setCompany(null)
  }





  return <div className="rounded-3xl bg-gray-100 p-[2rem]">
    <Title title="审批注册">
    </Title>
    <div className="flex flex-col gap-[1rem] mt-[2rem]">
      {list.map((info) => <SingleSignup key={info.account} info={info} handle={() => setCompany(info)}></SingleSignup>)}
    </div>
    {company?<SignupInfo info={company} close={() => setCompany(null)} pass={() => passCompany(company)} reject={() => rejectCompany(company)}></SignupInfo>:null}
  </div>
}

export default JudgeSignup