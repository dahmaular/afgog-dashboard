import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FormWizardContainer from "../../../Components/FormLayout/FormWizard";
import AddProductContainer from "../../../Components/apps/ecommerce/addProduct";
const FormWizard = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Product" title="New Product" />
      <AddProductContainer />
    </div>
  );
};

export default FormWizard;
