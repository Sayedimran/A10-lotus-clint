import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const sports = useLoaderData();
  const {
    _id,
    photo,
    name,
    category,
    price,
    rating,
    customization,
    time,
    stoke,
    description,
  } = sports;

  const handleUpdateEquip = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const stoke = form.stoke.value;
    const description = form.description.value;

    const updatedEquipment = {
      photo,
      name,
      category,
      price,
      rating,
      customization,
      time,
      stoke,
      description,
    };

    fetch(`http://localhost:5000/sport/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            text: "Product Added Successfully",
            icon: "success",
            showConfirmButton: "Cool",
            timer: 1500,
          });
        }
      });
    console.log(updatedEquipment);
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Equipment</h2>
      <form
        onSubmit={handleUpdateEquip}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Image Upload */}
        <div className="form-control">
          <label className="label font-semibold">Image URL</label>
          <input
            defaultValue={photo}
            name="photo"
            type="text"
            placeholder="Enter image URL"
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        {/* Item Name */}
        <div className="form-control">
          <label className="label font-semibold">Item Name</label>
          <input
            defaultValue={name}
            name="name"
            type="text"
            placeholder="Enter item name"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Category Name */}
        <div className="form-control">
          <label className="label font-semibold">Category Name</label>
          <input
            defaultValue={category}
            name="category"
            type="text"
            placeholder="Enter item name"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Price */}
        <div className="form-control">
          <label className="label font-semibold">Price</label>
          <input
            defaultValue={price}
            name="price"
            type="number"
            placeholder="Enter price"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label font-semibold">Rating (Out of 5)</label>
          <input
            defaultValue={rating}
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            placeholder="Enter rating"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Customization */}
        <div className="form-control">
          <label className="label font-semibold">Customization</label>
          <input
            defaultValue={customization}
            name="customization"
            type="text"
            placeholder="Customization details"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Processing Time */}
        <div className="form-control">
          <label className="label font-semibold">Processing Time (Days)</label>
          <input
            defaultValue={time}
            name="time"
            type="number"
            placeholder="Delivery time in days"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Stock Status */}
        <div className="form-control">
          <label className="label font-semibold">Stock Quantity</label>
          <input
            defaultValue={stoke}
            name="stoke"
            type="number"
            placeholder="Available stock"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Description */}
        <div className="form-control md:col-span-2">
          <label className="label font-semibold">Description</label>
          <textarea
            defaultValue={description}
            name="description"
            className="textarea textarea-bordered w-full rounded-xl"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control md:col-span-2">
          <button className="btn btn-primary text-gray-700 bg-green-500 w-full rounded-xl">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipment;
