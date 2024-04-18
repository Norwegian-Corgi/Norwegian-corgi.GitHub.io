<script setup lang="ts">
const {isMobileOrTablet} = useDevice();

type Job = {
  duration: string;
  company: string;
  role: string;
  color?: string;
}
const jobs: Array<Job> = [
  {
    duration: "07-2023 - today",
    company: "systemticks GmbH",
    role: "Software Developer",
    color: "#00DC82"
  },
  {
    duration: "05-2022 - 06-2023",
    company: "FORCAM GmbH",
    role: "Fullstack Developer"
  },
  {
    duration: "05-2021 - 04-2022",
    company: "FORCAM GmbH",
    role: "Working Student(Software Developer)"
  },
  {
    duration: "10-2020 - 03-2021",
    company: "YURI GmbH",
    role: "Intern"
  }
]
</script>

<template>
  <custom-section title="Career">
    <div class="flex" :class="isMobileOrTablet ? 'flex-col' : 'justify-between'">
      <div>
        <h1 class="text-2xl my-4">Experience</h1>
        <el-timeline>
          <el-timeline-item
              v-for="(job, index) in jobs"
              :key="index"
              :timestamp="job.duration"
              :color="job.color"
          >
            <p class="text-white text-lg">{{ job.role}} at {{ job.company }}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div>
        <h1 class="text-2xl my-4">Education</h1>
        <el-timeline>
          <el-timeline-item timestamp="03-2018 - 04-2022">
            <p class="text-white text-lg">Electrical Engineering and IT</p>
            <p class="text-white text-lg">Hochschule Ravensburg Weingarten</p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </custom-section>
</template>
