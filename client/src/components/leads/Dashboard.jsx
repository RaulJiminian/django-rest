import { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";

export default function Dashboard({leads, handleLeadDelete, setToggle}) {
  return (
    <Fragment>
      <Form setToggle={setToggle} />
      <Leads leads={leads} handleLeadDelete={handleLeadDelete}/>
    </Fragment>
  );
}
