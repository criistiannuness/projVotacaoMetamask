"use client"

import { useState } from"react";
import Head from "next/head";
import { doLogin } from "./services/Web3Service";
import { getCurrentVoting } from "./services/Web3Service";
import { useRouter } from "next/navigation";


export default function Home() {

  const { push } = useRouter();
  
  const [message, setMessage] = useState("");
  function btnLoginClick(){
    doLogin()
      .then(account => push("/vote"))
      .catch(err =>{
        console.error(err);
        setMessage(err.message);
      })
  }
  return (
    <>
    <Head>
      <title>Webbb3 | Login</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://capricho.abril.com.br/wp-content/uploads/2022/01/bbb22-divulgacao.jpg?quality=85&strip=info&w=820&h=523&crop=1" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
        </div>
        <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Webbb3</h1>
        <p className="lead">Votação on-chain do BBB.</p>
        <p className="lead mb3">Autentique-se com sua carteira metamask para votar no proximo paredão.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" onClick={btnLoginClick} className="btn btn-primary btn-lg px-4 me-md-2">
            <img src="METAMASK.PNG" width="64" className="me-3"/>
            Conectar com a metamask
          </button>

        </div>
        <p className="message">{message}</p>
        </div>
      </div> 
      <fotter className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 md-0 text-body-secondary">&copy; 2024 Webbb3</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>

        </ul>
         
      </fotter>
    </div>
  </>
  );
}
