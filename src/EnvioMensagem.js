// src/EnvioMensagem.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EnvioMensagem() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_21jf5xh',  // Substituindo pelo seu Service ID
      'template_yrxiqxs',  // Substituindo pelo seu Template ID
      form.current,
      'UVAftDObySZHnsyQU' // Substituindo pela sua Public Key
    ).then(
      () => {
        alert('Mensagem enviada com sucesso!');
      },
      (error) => {
        alert('Erro ao enviar: ' + error.text);
      }
    );
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📬 Enviar Mensagem</h2>
      <form ref={form} onSubmit={enviarEmail}>
        <label style={{ fontWeight: 'bold' }}>Seu nome</label>
        <input type="text" name="user_name" required
          style={inputStyle} />

        <label style={{ fontWeight: 'bold' }}>Seu e-mail</label>
        <input type="email" name="user_email" required
          style={inputStyle} />

        <label style={{ fontWeight: 'bold' }}>Mensagem</label>
        <textarea name="message" required rows="4"
          style={{ ...inputStyle, resize: 'none' }} />

        <button type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0 16px 0',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '14px'
};
