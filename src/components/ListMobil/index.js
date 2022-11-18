import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListMobil } from "../../actions/mobilaction";
import '../../carimobil.css';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// class filterMobil {
//   static populateCars = (cars) => {
//     return cars.map((car) => {
//       const isPositive = getRandomInt(0, 1) === 1;
//       const timeAt = new Date();
//       const mutator = getRandomInt(1000000, 100000000);
//       const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

//       return {
//         ...car,
//         availableAt,
//       };
//     })
//   }
// }

function ListMobil() {
  const { getListMobilResult, getListMobilLoading, getListMobilError } =
    useSelector((state) => state.MobilReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    // get element list mobil :
    console.log("1. use effect component did mount");
    dispatch(getListMobil());
  }, [dispatch]);
  return (
    <div>
      {getListMobilResult ? (
        getListMobilResult.map((mobil) => {
          return (
            <div className="row list_mobil" key={mobil.id}>
              <div className="card col-lg-3 card_1" >
                {/* <img src="{mobil.image}" alt="" className=""/> */}
                <p>{mobil.image}</p>
                <p>{mobil.model}/{mobil.manufacture}</p>
                <p className="fw-bold fs-6">Rp{mobil.rentPerDay}</p>
                <p>{mobil.description}</p>
                <p><span><img src="/fi_users.png" alt=""/></span>&emsp;{mobil.capacity} Orang</p>
                <p><span><img src="/fi_settings.png" alt=""/></span>&emsp;{mobil.transmission}</p>
                <p><span><img src="/fi_calendar.png" alt=""/></span>&emsp;{mobil.year}</p>
                <div className="text-center">
                  <button className="btn button-order">Pilih Mobil</button>
                </div>
              </div>
              <div className="card col-lg-3 card_2">
                <img src="{mobil.image}" alt="" className=""/>
                <p>{mobil.model}/{mobil.manufacture}</p>
                <p className="fw-bold fs-6">Rp{mobil.rentPerDay}</p>
                <p>{mobil.description}</p>
                <p><span><img src="/fi_users.png" alt=""/></span>&emsp;{mobil.capacity} Orang</p>
                <p><span><img src="/fi_settings.png" alt=""/></span>&emsp;{mobil.transmission}</p>
                <p><span><img src="/fi_calendar.png" alt=""/></span>&emsp;{mobil.year}</p>
                <div className="text-center">
                  <button className="btn button-order">Pilih Mobil</button>
                </div>
              </div>
              <div className="card col-lg-3 card_3">
                <img src="{mobil.image}" alt="" className=""/>
                <p>{mobil.model}/{mobil.manufacture}</p>
                <p className="fw-bold fs-6">Rp{mobil.rentPerDay}</p>
                <p>{mobil.description}</p>
                <p><span><img src="/fi_users.png" alt=""/></span>&emsp;{mobil.capacity} Orang</p>
                <p><span><img src="/fi_settings.png" alt=""/></span>&emsp;{mobil.transmission}</p>
                <p><span><img src="/fi_calendar.png" alt=""/></span>&emsp;{mobil.year}</p>
                <div className="text-center">
                  <button className="btn button-order">Pilih Mobil</button>
                </div>
              </div>
            </div>
          );
        })
      ) : getListMobilLoading ? (
        <p>Loading.....</p>
      ) : (
        <p>{getListMobilError} ? getListMobilError : &quot;Data Kosong&quot;</p>
      )}
    </div>
  );
}

export default ListMobil;
