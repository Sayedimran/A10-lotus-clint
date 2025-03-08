import { useLoaderData } from "react-router-dom";
import ProductUser from "./ProductUser";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const lodedEquipmentList = useLoaderData();

  const [sports, setSports] = useState(lodedEquipmentList);

  useEffect(() => {
    console.log(sports);
  }, [sports]);
 
  const CardInfoDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(`http://localhost:5000/sport/${_id} `, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // const remaining = sports.filter(sport => sport._id !== _id)
              setSports((prevItems) => {
                const newdelte = prevItems.filter((item) => item._id !== _id);
                console.log(newdelte);

                return newdelte;
              });
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {sports.map((item) => (
        <ProductUser key={item._id} item={item} ondelete={CardInfoDelete} />
      ))}
    </div>
  );
};

export default MyEquipmentList;
