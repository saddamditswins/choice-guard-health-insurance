import React from "react";

import { Button, Autocomplete, Modal } from "@mantine/core";

const Modal1 = () => {
  return (
    <Modal centered size="xl" opened={isModalOpen} onClose={handleCloseModal}>
      <div
        style={{
          display: "flex",
          gap: "14px",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ textAlign: "center" }}>My Doctors</h2>
          <Autocomplete
            color="#495057"
            label="Doctor's City or ZiP Code"
            placeholder="Pick one"
            icon={<FaSearch />}
            data={[
              "Albany, NY, USA",
              "Albany, OR, USA",
              "Albany, GA, USA",
              "Albany, CA, USA",
            ]}
          />
          <Autocomplete
            label="Distance"
            placeholder="Pick one"
            data={["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"]}
          />
          <DoctorField
            label="Doctor's name"
            placeholder="Pick one"
            data={data}
          />
        </div>
        <Button onClick={handleCloseModal} style={styles.closeButton}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default Modal1;
