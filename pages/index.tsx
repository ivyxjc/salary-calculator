import styles from './index.module.css'
import {IvyPage} from "../types";
import DefaultLayout from "../layout/Default";
import {useFormik} from "formik";
import * as yup from 'yup'
import {Button, Checkbox, FormControl, FormLabel, HStack, Input, VStack} from "@chakra-ui/react";
import React, {useState} from "react";

const Home: IvyPage = () => {
  const [result, setResult] = useState(2000)

  const [childrenEdu, setChildrenEdu] = useState(false)
  const [furtherEdu, setFurtherEdu] = useState(false)
  const [disease, setDisease] = useState(false)
  const [loan, setLoan] = useState(false)
  const [rent, setRent] = useState(false)
  const [elder, setElder] = useState(false)

  const {values, touched, errors, handleSubmit, handleBlur, handleChange, isSubmitting} = useFormik(
    {
      initialValues: {
        salary: 0,
        socialInsuranceBase: 0,
        providentFundBase: 0,
      },
      validationSchema: yup.object().shape({
        salary: yup.number().required('Required'),
        socialInsuranceBase: yup.number().required('Required'),
        providentFundBase: yup.number().required('Required')
      }),

      onSubmit: (values, actions) => {
        console.log(childrenEdu, furtherEdu, disease, loan, rent, elder)
        setResult(2000)
        actions.setSubmitting(false)
      }
    }
  )
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <span>100</span>
        <VStack spacing='2'>
          <FormControl>
            <FormLabel>税前</FormLabel>
            <Input
              name="salary"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.salary}/>
          </FormControl>
          <FormControl>
            <FormLabel>社保汇缴基数</FormLabel>
            <Input
              name="socialInsuranceBase"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.socialInsuranceBase}/>
          </FormControl>

          <FormControl>
            <FormLabel>公积金汇缴基数</FormLabel>
            <Input
              name="providentFundBase"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.providentFundBase}/>
          </FormControl>
          <>
            <HStack pl={2} spacing={8}>
              <Checkbox checked={childrenEdu}
                        onChange={(e) => setChildrenEdu(e.target.checked)}>子女教育</Checkbox>
              <Checkbox checked={furtherEdu}
                        onChange={(e) => setFurtherEdu(e.target.checked)}>继续教育</Checkbox>
              <Checkbox checked={disease}
                        onChange={(e) => setFurtherEdu(e.target.checked)}>大病医疗</Checkbox>
            </HStack>
            <HStack pl={2} mt={10} spacing={8}>
              <Checkbox checked={loan}
                        onChange={(e) => setLoan(e.target.checked)}>住房贷款</Checkbox>
              <Checkbox checked={rent}
                        onChange={(e) => setRent(e.target.checked)}>住房租金</Checkbox>
              <Checkbox checked={elder}
                        onChange={(e) => setElder(e.target.checked)}>赡养老人</Checkbox>
            </HStack>
          </>

          <Input
            name="providentFundBase"
            type="number"
            disabled={true}
            onChange={handleChange}
            onBlur={handleBlur}
            value={result}/>
          <VStack w='full'>
            <Button isLoading={isSubmitting} type="submit" colorScheme='brand' isFullWidth>
              计算
            </Button>
          </VStack>

        </VStack>
      </form>
    </>
  )
}


Home.layout = DefaultLayout


export default Home
