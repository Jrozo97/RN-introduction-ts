import { useRef, useState, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes.interface";

export const useUsers = () => {
  const [listUsers, setListUsers] = useState<User[]>([]);

  const pageRef = useRef(0);

  useEffect(() => {
    //Llamado al API
    loadUser();
  }, []);

  const loadUser = async () => {
    const resp = await reqResApi.get<ReqResList>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setListUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert("No hay mas registros");
    }
  };

  const pageNext = () => {
    pageRef.current++;
    loadUser();
  };

  const pageBack = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUser();
    }
  };

  return {
    listUsers,
    pageNext,
    pageBack,
  };
};
