import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "helpers/axios";
import { Cabinet } from "types/Cabinet";
import BackButton from "components/Basic/Buttons/Back";

const ViewCabinet: React.FC = () => {

  const [cabinetInfo, setCabinetInfo] = useState<Cabinet>()

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await api
      .get("/cabinet/", { params: { cabinet: id } })
      .then( res => {
        setCabinetInfo(res.data)
      })
      .catch( err => {
        console.log(err);
      })
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <main>
      <BackButton/>
      <div>
        <div>
          <div>
            <img src="" alt=""/>
          </div>
          <a href="###" onClick={()=>{document.execCommand('copy', true, "yandex.ru")}}>
            тап сюда или на qr чтобы скопировать ссылку
          </a>
          <h3>Кабинет {cabinetInfo?.cabinetNumber}</h3>
        </div>
        <div>
          {/* Дроп-листы */}
          <div>
            <p>Панель управления кабинетом</p>
            {/* Редактирование и удаление */}
          </div>
        </div>
      </div>
    </main>
  )
};

export default ViewCabinet;