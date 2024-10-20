import { useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PropTypes from "prop-types";

function AdminProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.files);
  }


  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div>
        <Input
          id="image-upload"
          type="file"
          className=""
          ref={inputRef}
          onChange={handleImageFileChange}
        />
      </div>
    </div>
  );
}

export default AdminProductImageUpload;

AdminProductImageUpload.propTypes = {
  imageFile: PropTypes.object,
  setImageFile: PropTypes.func,
  uploadedImageUrl: PropTypes.string,
  setUploadedImageUrl: PropTypes.func,
};
