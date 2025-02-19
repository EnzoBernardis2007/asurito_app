import React, { useState } from 'react'
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native'

const Field = ({ name, value, onChange }) => {
    return (
        <View>
        <Text>{name}</Text>
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={'Insira aqui...'}
        />
        </View>
    )
}

export default function Sign() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        cpf: '',
        fullLegalName: '',
        preferedName: '',
        genderName: '',
        birthday: '',
        height: '',
        weight: '',
        sex: '',
        kyu: '',
        dan: '',
        dojo: '',
        city: '',
        wins: '',
        defeats: '',
    })

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const handleSubmit = () => {
        console.log(form)
        // Aqui você enviaria os dados para sua API
    }

    return (
        <ScrollView>
            <Field name="Email" value={form.email} onChange={(value) => handleChange('email', value)} />
            <Field name="Senha" value={form.password} onChange={(value) => handleChange('password', value)} />
            <Field name="CPF" value={form.cpf} onChange={(value) => handleChange('cpf', value)} />
            <Field name="Nome Completo" value={form.fullLegalName} onChange={(value) => handleChange('fullLegalName', value)} />
            <Field name="Nome Social" value={form.preferedName} onChange={(value) => handleChange('preferedName', value)} />
            <Field name="Gênero" value={form.genderName} onChange={(value) => handleChange('genderName', value)} />
            <Field name="Aniversário" value={form.birthday} onChange={(value) => handleChange('birthday', value)} />
            <Field name="Altura" value={form.height} onChange={(value) => handleChange('height', value)} />
            <Field name="Peso" value={form.weight} onChange={(value) => handleChange('weight', value)} />
            <Field name="Sexo" value={form.sex} onChange={(value) => handleChange('sex', value)} />
            <Field name="Kyu" value={form.kyu} onChange={(value) => handleChange('kyu', value)} />
            <Field name="Dan" value={form.dan} onChange={(value) => handleChange('dan', value)} />
            <Field name="Dojo" value={form.dojo} onChange={(value) => handleChange('dojo', value)} />
            <Field name="Cidade" value={form.city} onChange={(value) => handleChange('city', value)} />
            <Button title="Criar Conta" onPress={handleSubmit} />
        </ScrollView>
    )
}
