import axios from "axios";

import { useQuery } from "react-query";

async function fetchRadionice() {
  const response = await axios.get("http://localhost:3000/radionice");
  return response.data;
}

async function fetchTeme() {
  const response = await axios.get("http://localhost:3000/teme");
  return response.data;
}

async function fetchTezine() {
  const response = await axios.get("http://localhost:3000/tezine");
  return response.data;
}

async function fetchPredavaci() {
  const response = await axios.get("http://localhost:3000/predavaci");
  return response.data;
}
async function fetchOrganizacije() {
  const response = await axios.get("http://localhost:3000/organizacije");
  return response.data;
}

async function fetchLica() {
  const predavaci = await fetchPredavaci();
  const numPredavaci = predavaci.length;
  const res = await axios.get(
    `https://randomuser.me/api/?results=${numPredavaci}`
  );
  return res.data.results;
}
async function fetchRandomWorkshop() {
  const response = await axios.get(`https://source.unsplash.com/random`);
  return response.results;
}

export const useRadionice = () => {
  const { data, isLoading, refetch, isFetched } = useQuery(
    "radionice",
    fetchRadionice
  );
  return { data, isLoading, refetch, isFetched };
};

export const useTeme = () => {
  const { data, isLoading, refetch } = useQuery("teme", fetchTeme);
  return { data, isLoading, refetch };
};

export const useTezine = () => {
  const { data, isLoading } = useQuery("tezine", fetchTezine);
  return { data, isLoading };
};

export const usePredavaci = () => {
  const { data, isLoading, refetch } = useQuery("predavaci", fetchPredavaci);
  return { data, isLoading, refetch };
};
export const useOrganizacije = () => {
  const { data, isLoading, refetch } = useQuery(
    "organizacije",
    fetchOrganizacije
  );
  return { data, isLoading, refetch };
};

export const useLica = () => {
  const { data, isLoading, refetch } = useQuery("lica", fetchLica, {
    staleTime: Infinity,
  });
  return { data, isLoading, refetch };
};

export const useRandomWorkshop = () => {
  const { data, isLoading, refetch } = useQuery(
    "workshop",
    fetchRandomWorkshop,
    {
      staleTime: Infinity,
    }
  );
  return { data, isLoading, refetch };
};
