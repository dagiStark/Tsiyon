import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PropTypes from "prop-types";

function CommonForm({ formControls }) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;

      default:
        break;
    }
  }
  return (
    <form action="">
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.Label}</Label>{" "}
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
    </form>
  );
}

export default CommonForm;

CommonForm.prototype = {
  formControls: PropTypes.object,
};
