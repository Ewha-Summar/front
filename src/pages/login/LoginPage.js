import { useEffect, useState } from "react";
import styled from "styled-components";
import BlankTop from '../../components/BlankTop'
import TextComponent from '../../components/TextComponent'
import { loginUser } from '../../_actions/user_action';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/header/Header'
import {Form, Button} from 'antd';
import { useDispatch } from "react-redux";

const Fix =styled.div`
min-height:100vh;
background-color:  #ffffff;
`;
const Center=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Wrapper = styled.div`
  width:110rem;
  height: 100%;
  padding:30px;
  display: flex;
  flex-direction: column;

  margin: 10 auto;
`
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
`
const Content=styled.div`
   display: flex;
  flex-direction: row;
  align-content:center;
`



function LoginPage(props) {

  const dispatch = useDispatch();
  const [formErrorMessage, setFormErrorMessage] = useState('')

  return (

    <Fix>
        <Wrapper>
           <Header></Header>
           <Column>
           <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object().shape({
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

      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            user_id: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              window.localStorage.setItem('isAuth','true');
              window.localStorage.setItem('jwt',response.payload.access_token);
              window.localStorage.setItem('user_id',response.payload.user_id);
              window.localStorage.setItem('name',response.payload.name);
              props.history.push("/");
            } else {
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
                
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
               

                <Center>    
                  <Button
                    size="large"
                    ghost="true"
                    type="text"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    &nbsp; 
                    &nbsp;&nbsp; 로그인 &nbsp; &nbsp; 
                   
                  </Button></Center>
               
              </Form>
            );
          }}
        </Formik></Column>
      </Wrapper>
      </Fix>
  );
};

export default LoginPage;
