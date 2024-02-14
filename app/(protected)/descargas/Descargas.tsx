"use client";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Container from "@/components/Container";
import moment from "moment";
import Link from "next/link";
import { Download } from "lucide-react";
import Heading from "@/components/Heading";

const Descargas = () => {
  const data = [
    {
      id: 1,
      title: "CONCAR® SQL #YoMeQuedoEnCasa 14.19",
      description:
        "CARPETA INCLUYE: #QUÉDATE EN CASA CONCAR SQL 14.19 + e-CONCAR NET 12.55 + RSFINA",
      href: "https://mega.nz/file/3HpXWJIb#LebTnu5_yxunu5bT4bBnlmYtAj8lYJoTC4SXRoJfM50",
      publicado: moment().format("DD/MM/YYYY"),
    },
    {
      id: 2,
      title: "0CONCAR® SIRE SQL 2023.144",
      description:
        "- Se otorgará (01) licencia por cliente (sin costo) para única instalación local.",
      href: "https://mega.nz/file/3HpXWJIb",
      publicado: moment().format("DD/MM/YYYY"),
    },
  ];
  let rows: any = [];
  if (data) {
    rows = data.map((user) => {
      return {
        id: user.id,
        title: user.title,
        description: user.description,
        href: user.href,
        publicado: user.publicado,
      };
    });
  }
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "TITULO",
      width: 750,
      renderCell: (params) => {
        return (
          <div>
            <h1 className="font-bold text-cyan-600">{params.row.title}</h1>
            <div className="overflow-hidden overflow-wrap">
              <p>{params.row.description}</p>
            </div>
          </div>
        );
      },
    },
    {
      field: "publicado",
      headerName: "PUBLICADO",
      width: 200,
    },
    {
      field: "href",
      headerName: "DESCARGAR",
      width: 200,
      renderCell: (params) => {
        return (
          <Link
            className="text-cyan-600 hover:text-cyan-800 flex gap-2 items-center justify-center"
            href={params.value}
            target="_blank"
            rel="noreferrer"
          >
            <Download size={24} />
            Descargar
          </Link>
        );
      },
    },
  ];
  return (
    <Container>
      <div className="md:max-w-[1150px] m-auto text-xl">
        <div className="mb-4 mt-8">
          <Heading title="Descargas" center />
        </div>
        <div className="py-5" style={{ height: 280, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
        </div>
      </div>
    </Container>
  );
};

export default Descargas;
