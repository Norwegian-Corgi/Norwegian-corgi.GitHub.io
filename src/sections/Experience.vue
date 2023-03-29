<template>
  <div>
    <Section heading="Experience">
      <detail-card
        start="01.05.2022"
        name="FORCAM GmbH"
        location="Ravensburg, Germany"
        title="Full Stack Developer"
      >
        <ul class="no-margin">
          <li>
            Worked on multiple web applications made using Springboot, Postgres,
            Vue3 and TypeScript.
          </li>
          <li>
            Integrated Google Blockly into the product as a Vue Component to
            make it easier for the users to transform collected data.
          </li>
          <li>
            Reworked the View in the UI for interaction with customer and third
            party system.
          </li>
          <li>
            Implemented an import/export mechanism for data from CSV files using
            Apache libraries, increasing the versatility and flexibility of the
            product.
          </li>
          <li>
            Created new logger to write logs in files based on individual
            assets.
          </li>
          <li>
            Wrote test cases and unit tests to reduce bugs, resulting in a more
            stable and reliable product.
          </li>
        </ul>
      </detail-card>
      <detail-card
        location="Ravensburg, Germany"
        start="15.10.2021"
        end="15.04.2022"
        name="FORCAM GmbH"
        title="Bachelor Thesis"
      >
        <ul class="no-margin">
          <li>
            Conducted research on low-code platforms and evaluated their
            suitability for integration into the EDGE product.
          </li>
          <li>
            Wrote requirements and selection criteria for low-code platforms and
            other technologies.
          </li>
          <li>
            Created comprehensive test plans and executed tests to validate the
            functionality and performance of various technologies, identifying
            and resolving issues.
          </li>
        </ul>
      </detail-card>
      <detail-card
        location="Ravensburg, Germany"
        start="01.05.2021"
        end="15.10.2021"
        name="FORCAM GmbH"
        title="Working Student, Software Developer"
      >
        <ul class="no-margin">
          <li>
            Conducted extensive research on customer APIs and IoTDB, to
            integrate them into the EDGE product and its extensions.
          </li>
          <li>
            Implemented multiple UI features, collaborating with UX designers
            and cross-functional teams to improve product usability and customer
            satisfaction.
          </li>
        </ul>
      </detail-card>
      <detail-card
        location="Meckenbeuren, Germany"
        start="01.09.2020"
        end="07.03.2021"
        name="YURI GmbH"
        title="Intern"
      >
        <ul class="no-margin">
          <li>
            Developed firmware on state-of-the-art Texas Instruments
            microcontrollers in C/C++ to measure environmental data.
          </li>
          <li>Developed Python programs to convert raw data with a UI.</li>
          <li>Designed PCBs for multiple experiments.</li>
        </ul>
      </detail-card>
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailCard from "@/components/DetailCard.vue";
import Section from "@/components/Section.vue";

export default defineComponent({
  name: "Experience",
  components: { Section, DetailCard },
});
</script>

<style scoped></style>
