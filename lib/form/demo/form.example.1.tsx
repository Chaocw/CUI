import React, { useState } from 'react';
import './form.example.scss';
import Form, { ValidateFields as validate, FormValue, FormField } from '../form'
import Button from 'lib/button/button'

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState<FormField[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const rules = [
    { name: 'username', isRequired: true, message: '必填项' },
    { name: 'username', minLen: 2, maxLen: 4, message: '未在2-4之间' },
    { name: 'password', minLen: 1, maxLen: 4, message: '未在1-4之间' },
    { name: 'password', pattern: /\d+/, message: '不符合正则条件' },
  ];
  const onSubmit = () => {
    const errors = validate(formData, rules);
    setErrors(errors);
  };

  const onReset = () => {
    const resetFormData: FormValue = {};
    const errors = {};
    Object.keys(formData).forEach((k: string) => resetFormData[k] = '');
    setErrors(errors);
    setFormData(resetFormData);
  };

  const onChange = (value: FormValue) => {
    setFormData(value);
    const errors = validate(value, rules);
    setErrors(errors);
  };

  return <div>
    <div className="f-form-demo">
      <h1 style={{marginBottom: 10}}>第一个例子</h1>
      <Form
        onChange={onChange}
        fields={fields}
        value={formData}
        errors={errors}
        onSubmit={onSubmit}
        buttons={
          <>
          <Button type="primary" htmlType="submit">提交</Button>,
          <Button onClick={onReset}>重置</Button>
          </>
        }
      />
    </div>
    <div className="f-form-demo">
      <h1 style={{marginBottom: 10}}>第二个例子</h1>
      <Form
        onChange={onChange}
        fields={fields}
        value={formData}
        errors={errors}
        layout='vertical'
        onSubmit={onSubmit}
        buttons={
          <>
          <Button type="primary" htmlType="submit">提交</Button>,
          <Button onClick={onReset}>重置</Button>
          </>
        }
      />
    </div>
  </div>
}