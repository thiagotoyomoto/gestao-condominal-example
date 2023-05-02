import { useEffect } from "react"

export default function CompanyInformationsPage() {
    return (
        <div className='b-2 m-4 border border-light'>
            <h3 className="mb-3">Informações</h3>

            <form onSubmit={(event) => event.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="company-name-input" className="form-label">Razão social</label>
                            <input type="text" className="form-control" id="company-name-input" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email-input" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email-input" />
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="cep-input" className="form-label">CEP</label>
                                <input type="number" className="form-control" id="cep-input" />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="street-input" className="form-label">Rua</label>
                                <input type="text" className="form-control" id="street-input" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="mb-3 col">
                                <label htmlFor="company-name-input" className="form-label">CNPJ</label>
                                <input type="text" className="form-control" id="company-name-input" />
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor="email-input" className="form-label">Telefone</label>
                                <input type="email" className="form-control" id="email-input" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cep-input" className="form-label">Site</label>
                            <input type="number" className="form-control" id="cep-input" />
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="street-input" className="form-label">Número</label>
                                <input type="text" className="form-control" id="street-input" />
                            </div>
                            <div className="col">
                                <label htmlFor="street-input" className="form-label">Complemento</label>
                                <input type="text" className="form-control" id="street-input" />
                            </div>
                            <div className="col">
                                <label htmlFor="street-input" className="form-label">Bairro</label>
                                <input type="text" className="form-control" id="street-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <button type="submit" className="btn btn-primary" style={{ width: 240 }}>Salvar</button>
                </div>
            </form>
        </div>
    )
}