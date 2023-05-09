<div class="hero <?= $classes ?>">
    <div class="background">
        <img src="<?= $background ?>">
    </div>

    <div class="wrap grid-2">
        <div>
            <h1>
                <?= $title ?>
            </h1>

            <?php if ( $description ): ?>
                <p>
                    <?= $description ?>
                </p>
            <?php endif; ?>

            <div class="divider" style="margin-top: 1rem;"></div>

            <div class="grid-6 heroServices">
                <?php if ( $services ):?>
                    <?php foreach ( $services as $item ):?>
                        <div class="heroServicesItem">
                            <img src="<?= $item->icon ?>">

                            <div>
                                <span>
                                    <?= $item->title ?>
                                </span>

                                <?php if ( $item->subtitle ): ?>
                                    <p class="subtitle">
                                        <?= $item->subtitle ?>
                                    </p>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
