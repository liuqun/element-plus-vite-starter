<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ''

const toast = () => {
  ElMessage.success('Hello')
}

let point = reactive({
  pixelSize: 28,
  color: 'red',
})

let label = reactive({
  text: 'Hello VueCesium',
  pixelOffset: [0, 80],
  fillColor: 'red',
})

const billboard = ref({
  image: '/favicon.svg',
  scale: 0.5,
})

const onClick = (e: any) => {
  const image = billboard.value.image
  if (e.type === 'onmouseover') {
    billboard.value = {
      image: image,
      scale: 0.6
    }
  } else if (e.type === 'onmouseout') {
    billboard.value = {
      image: image,
      scale: 0.5
    }
  }
}
import * as Cesium from 'cesium'
const myTiandituToken = ref<string> ('436ce7e50d27eede2f2929307e6b33c0')
const myTiandituCredit = ref<string>('GS(2021)1487号 - 甲测资字110047')
interface MyConfiguration {
  name: string,
  scheme: Cesium.GeographicTilingScheme,
}

let conf = reactive<MyConfiguration>({
  name: 'test',
  scheme: new Cesium.GeographicTilingScheme(),
})

</script>

<template>
  <div class="home viewer">
    <vc-viewer fullscreenButton>
      <vc-layer-imagery credit="甲测资字G2021">
        <vc-provider-imagery-tianditu
          mapStyle="img_w"
          :credit="myTiandituCredit"
          :token="myTiandituToken"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>

<!--      <vc-layer-imagery >-->
<!--        <vc-provider-imagery-wmts-->
<!--          :credit="myTiandituCredit"-->
<!--          ref="provider"-->
<!--          url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"-->
<!--          layer="World_Street_Map"-->
<!--          format="image/jpeg"-->
<!--          wmtsStyle="default"-->
<!--          tileMatrixSetID="default028mm"-->
<!--        ></vc-provider-imagery-wmts>-->
<!--      </vc-layer-imagery>-->

      <!-- 2. 天地图ibo（全球国界省界）图层： -->
      <vc-layer-imagery
        ref="layerInternationalBorders"
        :maximum-terrain-level="10"
      >
        <vc-provider-imagery-wmts
          :url="'https://{s}.tianditu.gov.cn/ibo_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=ibo&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles&tk='+myTiandituToken"
          :wmtsStyle="'default'"
          :tileMatrixSetID="'c'"
          :credit="myTiandituCredit"
          :subdomains="['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']"
          :tilingScheme="conf.scheme"
          :tileMatrixLabels="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
          :token="myTiandituToken"
          :layer="'ibo'">
        </vc-provider-imagery-wmts>
      </vc-layer-imagery>

<!--          <vc-layer-imagery>-->
<!--            <vc-provider-imagery-tianditu-->
<!--              mapStyle="ibo_w"-->
<!--              :credit="myTiandituCredit"-->
<!--              :token="myTiandituToken"-->
<!--            ></vc-provider-imagery-tianditu>-->
<!--          </vc-layer-imagery>-->
<!--          <vc-layer-imagery>-->
<!--            <vc-provider-imagery-tianditu-->
<!--              mapStyle="cia_w"-->
<!--              :credit="myTiandituCredit"-->
<!--              :token="myTiandituToken"-->
<!--            ></vc-provider-imagery-tianditu>-->
<!--          </vc-layer-imagery>-->
      <vc-entity
        ref="entity"
        :billboard="billboard"
        :position="{ lng: 108, lat: 32 }"
        :point="point"
        :label="label"
        @click="onClick"
        @mouseover="onClick"
        @mouseout="onClick"
      >
        <!-- <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        /> -->
      </vc-entity>
      <!-- <vc-layer-imagery>
        <vc-provider-imagery-osm />
      </vc-layer-imagery> -->
      <vc-navigation />
    </vc-viewer>
  </div>

  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <!-- example components -->
  <el-button @click="toast">El Message</el-button>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  <br />
  <el-input v-model="input" style="width: 200px; margin: 20px" />
  <el-tag>Tag 1</el-tag>

  <br />
  <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
    >element-plus-vite-starter</a>
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
    >unplugin-element-plus/examples/vite</a>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.viewer {
  height: 50vh;
}
</style>
