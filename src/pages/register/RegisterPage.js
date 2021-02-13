import { useEffect, useState } from "react";
import styled from "styled-components";
import BlankTop from '../../components/BlankTop'
import TextComponent from '../../components/TextComponent'
import { registerUser } from "../../_actions/user_action";
import Logo from '../../assets/logo.png'
import { Formik } from "formik";
import Header from '../../components/header/Header'
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
    Form, Button
  } from 'antd';

const Fix =styled.div`
min-height:100vh;
background-color:  #ffffff;
`;
const Wrapper = styled.div`
  width:110rem;
  height: 100%;
  padding:30px;
  display: flex;
  flex-direction: column;

  margin: 10 auto;
`
const MyIcon = styled.img`
  width:400px;
`;

MyIcon.defaultProps = {
  src: Logo,
};


const Column=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
`
const Input = styled.input`
  background-color: rgba(12, 26, 34, 0.2);
  border-radius: 0px;
  border-color: rgba(12, 26, 34, 0);
  width: 370px;
  color: black;
  outline: none;
  @media (max-width: 768px) {
    //iphone
    width: 250px;
  }
  @media (max-width: 767px) { //iphone
    width:220px;
  }
 
`;
const Content=styled.div`
   display: flex;
  flex-direction: row;
  align-content:center
`

const Center=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function RegisterPage(props){
    const dispatch = useDispatch();
    
  return (
    <>
    <Fix>
        <Wrapper>
           <Header></Header>
           <Column>
           <Formik
      initialValues={{
        email: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        nickname: Yup.string()
          .required('닉네임을 입력해야 합니다.'),
        email: Yup.string()
          .email('이메일형식이 올바르지 않습니다.')
          .required('이메일을 입력해야 합니다.'),
        password: Yup.string()
          .min(10, '패스워드는 적어도 10글자 이상이여야 합니다.')
          .max(20,'패스워드는  20글자 이하여야 합니다.')
          .matches(
            /^(?=.*[A-z])(?=.*[0-9])/
        ,'숫자와 영어를 혼합하여야 합니다.')
          .required('패스워드를 입력해야 합니다.'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '패스워드가 일치하지 않습니다.')
          .required('패스워드확인을 입력해야 합니다.')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            nickname: values.nickname,
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,

        } = props;
        return (

            <Form style={{ minWidth: '150px' }}  onSubmit={handleSubmit} > 
            <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' />
              <Form.Item  requiredMark="optional"  hasFeedback >
                <Content>
              <TextComponent title="이메일" /> 
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                 
                  </Content>

                </Form.Item>
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                <Form.Item requiredMark="optional" hasFeedback>
                  <Content>
                    <TextComponent title="패스워드"/>
                    <Input
                      id="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                   
                  </Content>
                </Form.Item>
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                <Form.Item
                  requiredMark="optional"
                  hasFeedback
                  
                >
                  <Content>
                    <TextComponent title="패스워드확인"/>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        "form-control" +
                        (errors.confirmPassword && touched.confirmPassword
                          ? " is-invalid"
                          : "")
                      }
                    />
                  </Content>
                </Form.Item>
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                <Form.Item
                  requiredMark="optional"
                  validateStatus={
                    errors.nickname && touched.nickname ? "error" : "success"
                  }
                >
                  <Content>
                    <TextComponent title="닉네임"/>
                    <Input
                      id="nickname"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                  </Content>
                </Form.Item>

                <BlankTop DesktopMargin="3" TabletMargin="1" MobileMargin="1" />
                <Center>{errors.password && touched.password && (
                  <div className="input-feedback" style={{color:'red'}}>{errors.password}</div>
                )}</Center>
                <Center>{errors.email && touched.email && (
                  <div className="input-feedback" style={{color:'red'}}>{errors.email}</div>
                )}</Center>
                <Center>{errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback" style={{color:'red'}}>{errors.confirmPassword}</div>
                )}</Center>
                <BlankTop DesktopMargin="2" TabletMargin="1" MobileMargin="1" />
                <Center>    
                  <Button
                    size="large"
                    ghost="true"
                    type="text"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                  
                    
                    &nbsp; 
                    &nbsp;&nbsp; 회원가입 &nbsp; &nbsp; 
                   
                  </Button></Center>
               
              </Form>
            );
          }}
        </Formik></Column>
      </Wrapper>
      </Fix>
    </>
  );
};

export default RegisterPage;
