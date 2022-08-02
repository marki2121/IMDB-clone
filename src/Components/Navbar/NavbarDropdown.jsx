import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

import { TypeContex } from "../../Context/contexts";
import { useContext } from "react";

const NavbarDropdown = () => {
  const [, setType] = useContext(TypeContex);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ marginRight: 10 }}
        >
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setType(undefined);
            }}
          >
            No filter
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(28);
            }}
          >
            Action
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(12);
            }}
          >
            Adventure
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(16);
            }}
          >
            Animation
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(35);
            }}
          >
            Comedy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(80);
            }}
          >
            Crime
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(99);
            }}
          >
            Documentary
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(18);
            }}
          >
            Drama
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(10751);
            }}
          >
            Family
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(14);
            }}
          >
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(36);
            }}
          >
            History
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(27);
            }}
          >
            Horror
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(10402);
            }}
          >
            Music
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(9648);
            }}
          >
            Mystery
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(10749);
            }}
          >
            Romance
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(878);
            }}
          >
            Science Fiction
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(10770);
            }}
          >
            TV Movie
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(53);
            }}
          >
            Thriller
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(10752);
            }}
          >
            War
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setType(37);
            }}
          >
            Western
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NavbarDropdown;
