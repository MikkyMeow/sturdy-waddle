import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIds, selectIds } from "../../../features/news/newsSlice";

export const NewsList = () => {
  const ids = useSelector(selectIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIds());
  }, [dispatch]);

  return (
    <div>
      <h2>News List</h2>
      {ids.map((id) => (
        <span key={id}>{id}</span>
      ))}
    </div>
  );
};
