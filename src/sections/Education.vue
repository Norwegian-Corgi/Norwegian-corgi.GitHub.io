<template>
  <div>
    <Section heading="Education">
      <detail-card
        start="01.03.2018"
        end="15.04.2022"
        name="Hochschule Ravensburg-Weingarten (RWU)"
        location="Weingarten, Germany"
        title="Bachelor of Engineering in Electrical Engineering and Information Technology"
      >
        <ul class="no-margin">
          <li>
            Average grade (German standard): <span class="bold">1.8</span>.
          </li>
          <li>
            Main topics: Automation technology, error correction algorithms
            (communication technology), embedded systems programming, software
            development, system architecture development, real-time applications
          </li>
          <li>
            Dissertation: "Investigation of the use of No/Low Code Engines in
            the context of signal composition of an EDGE platform". Graded with
            <span class="bold">1.2</span>.
          </li>
          <li>Tutored students of Analysis 2</li>
        </ul>
      </detail-card>
      <detail-card
        start="01.06.2015"
        end="31.06.2017"
        name="St. Gregorios Sr. Sec. School"
        location="Udaipur, India"
        title="High School | Science Major"
      >
        <ul class="no-margin">
          <li>
            Graduation with <span class="bold">93.8%</span> (German equivalent
            grade: ~<span class="bold">1.2</span>).
          </li>
          <li>Third highest rank in the school.</li>
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
  name: "Education",
  components: { Section, DetailCard },
});
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
