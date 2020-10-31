<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <HumanIcon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </p>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        {{ $t('高熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('強いだるさ') }}<br />
        {{ $t('（倦怠感）') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}<br />
        {{ $t('（呼吸困難）') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('発熱が続く') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('咳が続く') }}
      </li>
    </ul>
    <p :class="$style.duration">
      {{ $t('かかりつけ医等の地域で身近な医療機関に「電話で相談」してください。') }}
    </p>
    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('相談する医療機関に迷う場合は、居住地の「受診・相談センター」へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
    <p :class="$style.duration">
      {{ $t('地域の医療機関をご案内します。') }}
    </p>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import HumanIcon from '@/static/flow/responsive/accessibility.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
</style>
