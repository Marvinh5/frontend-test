import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppContext } from "../business_logic/AppProvider";

export default function useDetailsLoader() {
  const { id } = useParams();

  const {
    loadPageById,
    selectedBusiness,
    selectedBusinessReviews,
    selectedBusinessId,
  } = useAppContext();

  useEffect(() => {
    if (id) {
      loadPageById(id);
    }
  }, []);

  if (
    !selectedBusiness ||
    !selectedBusinessReviews ||
    selectedBusiness.id != selectedBusinessId
  ) {
    return { loading: true };
  }

  return {
    selectedBusiness,
    selectedBusinessReviews,
    loading: false
  };
}
