import Company from "@/shared/models/Company";
import { ChangeEventHandler, ReactEventHandler } from "react";

type Props = {
  companies: Company[],
  onSelect: ChangeEventHandler<HTMLSelectElement>
}

export default function CompanySelector({ companies, onSelect }: Props) {
  return (
    <form className='form-inline mb-3'>
      <select className="form-select w-100" id="company-select" aria-label="Select company" onChange={onSelect}>
        {companies.map((company) => (
          <option key={`company-${company.id}`} data-company-id={company.id}>{company.name}</option>
        ))}
      </select>
    </form>
  );
}